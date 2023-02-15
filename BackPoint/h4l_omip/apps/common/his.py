import cx_Oracle
from django.db import connections
from collections import namedtuple


class His:
    """
    本类为医院His数据库集成化操作类，提供对医院的常见数据库操作
    """

    def __init__(self, sql):
        self.conn = connections['his']
        self.cursor = self.conn.cursor()
        self.query_sql = sql

    def __enter__(self):
        return self

    def execute(self):
        try:
            result = self.cursor.execute(self.query_sql)
        except Exception as e:
            result = str(e)
        return result

    def fetch(self, fetch_all=False):
        try:
            self.cursor.execute(self.query_sql)
            if fetch_all:
                result = self.cursor.fetchall()
            else:
                result = self.cursor.fetchone()
        except Exception as e:
            result = str(e)
        return result

    def rows_as_dicts(self):
        try:
            self.cursor.execute(self.query_sql)
            col_names = [i[0] for i in self.cursor.description]
            result = [dict(zip(
                col_names,
                (str(i) if isinstance(i, cx_Oracle.LOB) else i for i in row)
            )) for row in self.cursor]
        except Exception as e:
            result = [{'error': 500, 'message': str(e)}]
        return result

    def rows_as_pandas(self):
        try:
            self.cursor.execute(self.query_sql)
            col_names = [i[0] for i in self.cursor.description]
            sql_data = [dict(zip(col_names, row)) for row in self.cursor]
            result = {k: [d[k] for d in sql_data if k in d] for k in col_names}
        except Exception as e:
            result = str(e)
        return result

    def row_as_namedtuple(self):
        try:
            self.cursor.execute(self.query_sql)
            desc = self.cursor.description
            nt_result = namedtuple('Result', [col[0] for col in desc])
            result = [nt_result(*row) for row in self.cursor.fetchall()]
        except Exception as e:
            result = str(e)
        return result

    def commit(self):
        self.conn.commit()

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.cursor.close()

    def __del__(self):
        self.cursor.close()
