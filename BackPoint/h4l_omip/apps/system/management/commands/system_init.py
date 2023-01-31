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
        ConnectionPool.objects.create(
            name='his', type='ORACLE',
            configuration='oracle://his:his@200.168.0.78:1521/gzsih'
        )
        # 员工数据同步语句
        SystemConfig.objects.create(title='系统默认密码', key='Default_PassWord', value="Abc@123456")
        # 科室数据同步语句
        SystemConfig.objects.create(title='系统版本', key='version', value="1.0.0")
