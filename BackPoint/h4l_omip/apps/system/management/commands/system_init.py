from ...models import SystemConfig, ConnectionPool
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    # 帮助文本, 一般备注命令的用途及如何使用。
    help = '初始化系统命令！'

    # 处理命令行参数，可选
    def add_arguments(self, parser):
        pass

    # 核心业务逻辑
    def handle(self, *args, **options):
        # 员工数据同步语句
        SystemConfig.objects.create(title='员工数据同步语句', key='HISEmployee', value="""
select
ygdm as code,
ygbh as num,
ygxm as name,
case when ygxb is null then 9 else ygxb end as gender,
sfzh as identity,
gjybysbm as nhic,
ksdm as department,
case zjpb when 0 then 'N' when 1 then 'Y' else null end as is_specialist,
case ksyq when 0 then 'N' when 1 then 'Y' else null end as antibiotic_rights,
kcfq as prescription_rights,
mzyq as narcotics_rights,
jsyq as psychotropic_rights,
sjhm as phone
from gy_ygdm
""")
        # 科室数据同步语句
        SystemConfig.objects.create(title='科室数据同步语句', key='HISDepartment', value="""
select
ksdm as code,
ksmc as name,
jgbm as alias,
sjks as parent_code,
mzsy as is_outpatient,
yjsy as is_technology,
zysy as is_inpatient,
bqsy as is_ward,
hzsy as is_consultation,
edcw as rated_bed,
plsx as sort,
gl2code as national_code,
gl2name as national_code
from gy_ksdm
        """)
        # 会诊记录提取语句
        SystemConfig.objects.create(title='HIS会诊申请单序号', key='HIS_HZJL_SQDH', value=8000)
        SystemConfig.objects.create(title='会诊记录查询语句', key='HIS_HZJL', value="""
select
    sq.sqxh,
    (
        select
            zyhm
        from
            zy_brry
        where
            zyh = to_number(sq.jzhm)
    ) as zyhm,
    (
        select
            ksmc
        from
            gy_ksdm
        where
            ksdm = sq.sqks
    ) as sqks,
    (
        select
            ygxm
        from
            gy_ygdm
        where
            ygdm = sq.sqys
    ) as sqys,
    sqsj,
    hzsj,
    sq.yqdx,
    tjbz,
    (
        select
            ygxm
        from
            gy_ygdm
        where
            ygdm = sq.tjys
    ) as tjys,
    tjsj,
    jsbz,
    jssj,
    (
        select
            ygxm
        from
            gy_ygdm
        where
            ygdm = sq.txry
    ) as txry,
    dbms_lob.substr(hzmd3, 4000, 1) as hzmd3,
    case
        yqff
        when 1 then '科室'
        when 2 then '医生'
    end as yqff,
    case
        yqff
        when 1 then (
            select
                ksmc
            from
                gy_ksdm
            where
                ksdm = yq.yqdx
        )
        when 2 then (
            select
                ygxm
            from
                gy_ygdm
            where
                ygdm = yq.yqdx
        )
    end as yqdx2,
    case
        yqff
        when 1 then (
            select
                ksdm
            from
                gy_ksdm
            where
                ksdm = yq.yqdx
        )
        when 2 then (
            select
                to_number(ygbh)
            from
                gy_ygdm
            where
                ygdm = yq.yqdx
        )
    end as yqdm2,
    qrbz,
    qrsj
from
    ys_zy_hzsq sq
    left join ys_zy_hzyq yq on sq.sqxh = yq.sqxh --left join ys_zy_hzyj yj on sq.sqxh=yj.sqxh
where
    tjsj > sysdate -3
    and sq.sqxh > {sqxh}
    and zfbz = 0
order by
    sqxh
        """)
        # HIS数据库链接语句
        # ConnectionPool.objects.create(
        #     name='his', type='ORACLE',
        #     configuration='oracle://his:his@200.168.0.78:1521/gzsih'
        # )
        # 员工数据同步语句
        SystemConfig.objects.create(title='系统默认密码', key='Default_PassWord', value="Abc@123456")
        # 科室数据同步语句
        SystemConfig.objects.create(title='系统版本', key='version', value="1.0.0")
        # 病历浏览语句
        SystemConfig.objects.create(title='病案浏览语句', key='EMRBrowser_BL', value="""
select
    bl01.blbh,
    bl01.brbh,
    bl01.blmc,
    bl01.zxsj,
    bl01.cjsj,
    bl01.wcsj,
    bl03.wdbh,
    bl03.wdnr
from
    emr.emr_bl_bl01 bl01
    inner join emr.emr_bl03 bl03 on bl01.blbh = bl03.blbh
where
    bl01.BLBH = '${blbh}'
    and blzt<>9
order by
    blbh
""")
        # 病历浏览语句按住院号
        SystemConfig.objects.create(title='病案浏览语句(按病人)', key='EMRBrowser_BR', value="""
select
    bl01.blbh,
    bl01.bllb,
    bl01.brbh,
    bl01.blmc,
    bl01.zxsj,
    bl01.cjsj,
    bl01.wcsj,
    bl03.wdbh,
    bl03.wdnr
from
    emr.emr_bl_bl01 bl01
    inner join emr.emr_bl03 bl03 on bl01.blbh = bl03.blbh
where
    bl01.brbh = '${brbh}'
    and blzt <> 9
order by
    blbh
        """)
        # 入院后八小时内首次病程记录
        SystemConfig.objects.create(title='首次病程记录大于8小时或者书写时间不足5分钟', key='EMR_QC_SCBCJL', value="""
SELECT
    V_EMR_BRRY.ZYHM,
    V_EMR_BRRY.BRXM,
    (
        SELECT
            KSMC
        FROM
            HIS.GY_KSDM
        where
            KSDM = V_EMR_BRRY.BRKS
    ) AS BRKS,
    V_EMR_BRRY.RYRQ,
    V_EMR_BRRY.CYRQ,
    (
        SELECT
            YGXM
        FROM
            HIS.GY_YGDM
        where
            YGDM = V_EMR_BRRY.ZYYS
    ) AS ZYYS,
    (
        SELECT
            YGXM
        FROM
            HIS.GY_YGDM
        where
            YGDM = V_EMR_BRRY.ZZYS
    ) AS ZZYS,
    EMR_BL_BL01.BLBH,
    EMR_BL_BL01.JZHM,
    EMR_BL_BL01.BRBH,
    EMR_BL_BL01.BLMC,
    EMR_BL_BL01.BLLX,
    EMR_BL_BL01.BLLB,
    EMR_BL_BL01.WCSJ,
    EMR_BL_BL01.CJSJ,
    EMR_BL_BL01.bllx,
    0 State,
    ' ' Pic,
    EMR_BL_BL01.BLZT,
    emr.EMR_KBM_BLLB.YDLBBM,
    case
        when (RYRQ +(1 / 24 * 8) < WCSJ)
        OR (
            WCSJ IS NULL
            AND SYSDATE - RYRQ > (1 / 24 * 8)
        ) then 'Y'
        else 'N'
    end AS DY8H,
    case
        when (wcsj - cjsj <(1 / 24 / 60 * 5)) then 'Y'
        else 'N'
    end AS XY5M
FROM
    HIS.V_EMR_BRRY
    left join emr.EMR_BL_BL01 on HIS.V_EMR_BRRY.ZYHM = EMR_BL_BL01.BRBH
    and (
        (EMR_BL_BL01.DLLB <> -1)
        OR (EMR_BL_BL01.DLJ <> '-HdrFtr')
    )
    AND EMR_BL_BL01.BLMC like '%首次病程记录%'
    AND BLLB = 294
    AND BLZT <> 9
    left join emr.EMR_KBM_BLLB on EMR_KBM_BLLB.LBBH = EMR_BL_BL01.BLLB
WHERE
    RYRQ >= To_Date('${start_date}', 'yyyy-mm-dd')
    and RYRQ < To_Date('${end_date}', 'yyyy-mm-dd')
    AND (
        (RYRQ +(1 / 24 * 8) < WCSJ)
        OR (
            WCSJ IS NULL
            AND SYSDATE - RYRQ > (1 / 24 * 8)
        )
        OR (wcsj - cjsj <(1 / 24 / 60 * 5))
    )
    AND CYPB <> 99
ORDER BY
    BRKS,
    RYRQ
                """)
        # 入院记录大于24小时语句
        SystemConfig.objects.create(title='入院记录大于24小时', key='EMR_QC_RYJL24', value="""
SELECT
    V_EMR_BRRY.ZYHM,
    V_EMR_BRRY.BRXM,
    (
        SELECT
            KSMC
        FROM
            HIS.GY_KSDM
        where
            KSDM = V_EMR_BRRY.BRKS
    ) AS BRKS,
    V_EMR_BRRY.RYRQ,
    V_EMR_BRRY.CYRQ,
    (
        SELECT
            YGXM
        FROM
            HIS.GY_YGDM
        where
            YGDM = V_EMR_BRRY.ZYYS
    ) AS ZYYS,
    (
        SELECT
            YGXM
        FROM
            HIS.GY_YGDM
        where
            YGDM = V_EMR_BRRY.ZZYS
    ) AS ZZYS,
    EMR_BL_BL01.BLBH,
    EMR_BL_BL01.JZHM,
    EMR_BL_BL01.BRBH,
    EMR_BL_BL01.BLMC,
    EMR_BL_BL01.BLLB,
    EMR_BL_BL01.WCSJ,
    EMR_BL_BL01.CJSJ,
    EMR_BL_BL01.bllx,
    0 State,
    ' ' Pic,
    EMR_BL_BL01.BLZT,
    EMR_KBM_BLLB.YDLBBM,
    case
        when (RYRQ + 1 < WCSJ)
        OR (
            WCSJ IS NULL
            AND SYSDATE - RYRQ > 1
        ) then 'Y'
        else 'N'
    end AS DY24H,
    case
        when (wcsj - cjsj <(1 / 24 / 60 * 5)) then 'Y'
        else 'N'
    end AS XY5M
FROM
    HIS.V_EMR_BRRY
    left join emr.EMR_BL_BL01 on HIS.V_EMR_BRRY.ZYHM = EMR_BL_BL01.BRBH
    and (
        (EMR_BL_BL01.DLLB <> -1)
        OR (EMR_BL_BL01.DLJ <> '-HdrFtr')
    )
    AND BLLB = 292
    AND BLZT <> 9
    left join emr.EMR_KBM_BLLB on EMR_KBM_BLLB.LBBH = EMR_BL_BL01.BLLB
WHERE
    RYRQ >= To_Date('${start_date}', 'yyyy-mm-dd')
    and RYRQ < To_Date('${end_date}', 'yyyy-mm-dd')
    AND (
        (RYRQ + 1 < WCSJ)
        OR (
            WCSJ IS NULL
            AND SYSDATE - RYRQ > 1
        )
        OR (wcsj - cjsj <(1 / 24 / 60 * 5))
    )
    """)
        # 首次上级医师查房记录大于48小时
        SystemConfig.objects.create(title='首次上级医师查房记录大于48小时', key='EMR_QC_SJCF48', value="""
select
    s.*
from(
        SELECT
            V_EMR_BRRY.ZYHM,
            V_EMR_BRRY.BRXM,
            (
                SELECT
                    KSMC
                FROM
                    HIS.GY_KSDM
                where
                    KSDM = V_EMR_BRRY.BRKS
            ) AS BRKS,
            V_EMR_BRRY.RYRQ,
            V_EMR_BRRY.CYRQ,
            EMR_BL_BL01.JZHM,
            EMR_BL_BL01.BLBH,
            EMR_BL_BL01.BRBH,
            EMR_BL_BL01.BLMC,
            EMR_BL_BL01.BLLB,
            EMR_KBM_BLLB.LBBH,
            EMR_BL_BL01.SXYS,
            EMR_BL_BL01.WCSJ,
            EMR_BL_BL01.CJSJ,
            EMR_BL_BL01.bllx,
            0 State,
            ' ' Pic,
            EMR_BL_BL01.BLZT,
            EMR_KBM_BLLB.YDLBBM,
            case
                when (RYRQ + 2 < WCSJ)
                OR (
                    WCSJ IS NULL
                    AND SYSDATE - RYRQ > 2
                ) then 'Y'
                else 'N'
            end AS DY24H,
            case
                when (wcsj - cjsj <(1 / 24 / 60 * 5)) then 'Y'
                else 'N'
            end AS XY5M,
            row_number() over (
                partition by zyhm
                order by
                    zyhm,
                    blbh asc
            ) as group_idx
        FROM
            HIS.V_EMR_BRRY
            left join emr.EMR_BL_BL01 on HIS.V_EMR_BRRY.ZYHM = EMR_BL_BL01.BRBH
            and (
                (EMR_BL_BL01.DLLB <> -1)
                OR (EMR_BL_BL01.DLJ <> '-HdrFtr')
            )
            AND BLLB = 294
            AND BLZT <> 9
            and MBLB IN ('297', '23', '25', '2000180')
            left join emr.EMR_KBM_BLLB on EMR_KBM_BLLB.LBBH = EMR_BL_BL01.BLLB
        WHERE
            RYRQ >= To_Date('&BeginDate', 'yyyy-mm-dd')
            and RYRQ < To_Date('&EndDate', 'yyyy-mm-dd')
            AND (
                (RYRQ + 2 < WCSJ)
                OR (
                    WCSJ IS NULL
                    AND SYSDATE - RYRQ > 2
                )
                OR (wcsj - cjsj <(1 / 24 / 60 * 5))
                OR (
                    CJSJ IS NULL
                    AND SYSDATE - RYRQ > 2
                )
            )
    ) s
where
    s.group_idx = 1;
            """)
