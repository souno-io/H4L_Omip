# -*- coding: utf-8 -*-

import json

from django.forms import Widget
from django.utils.safestring import mark_safe


class JsonEditorWidget(Widget):
    """
    在 django  admin 后台中使用  jsoneditor 处理 JSONField
    TODO：有待改进, 这里使用 % 格式化，使用 format 会抛出 KeyError 异常
    """

    html_template = """
    <div id='%(name)s_editor_holder' style="height:200px"></div>
    <textarea hidden readonly class="vLargeTextField" cols="40" id="id_%(name)s" name="%(name)s" rows="20">%(value)s</textarea>
    <script type="text/javascript">
        var element = document.getElementById('%(name)s_editor_holder');
        var json_value = %(value)s;
        var %(name)s_editor = new JSONEditor(element, {
            onChange: function() {
                var textarea = document.getElementById('id_%(name)s');
                var json_changed = JSON.stringify(%(name)s_editor.get()['Object']);
                textarea.value = json_changed;
            }
        });
        %(name)s_editor.set({"Object": json_value})
        %(name)s_editor.expandAll()
    </script>
    """

    def __init__(self, attrs=None):
        super(JsonEditorWidget, self).__init__(attrs)

    def render(self, name, value, attrs=None, renderer=None):
        if isinstance(value, str):
            value = json.loads(value)

        result = self.html_template % {'name': name, 'value': json.dumps(value), }
        return mark_safe(result)


class SQLEditorWidget(Widget):
    """
    在 django  admin 后台中使用  sql-formatter 处理 sql
    TODO：有待改进, 这里使用 % 格式化，使用 format 会抛出 KeyError 异常
    """
    html_template = """
        <div class="demo-sqledit" id="sqlEditor" style="height:500px"></div>
        <div class="demo-btn">
            <a href="javascript:;" id="lbtnFormat" class="btn btn-outline-success form-control" style="width:150px">格式化代码</a>
        </div>
        <textarea hidden class="vLargeTextField" cols="40" id="id_%(name)s" name="%(name)s" rows="20">%(value)s</textarea>
        <script>
            //测试SQL语句
            var textarea = document.getElementById('id_%(name)s');
            var testSql = textarea.value;
            //SQL编辑器对象（ACE插件）
            var editor;
            //初始化ACE插件
            function initSqlEditor() {
                //ACE API文档：https://ace.c9.io/#api=editor&nav=api
                //启用提示菜单
                var langTools = ace.require('ace/ext/language_tools');
                editor = ace.edit('sqlEditor');
                editor.setTheme('ace/theme/sqlserver');
                editor.session.setMode('ace/mode/sql');
                editor.setFontSize(16);
                //设置行高
                document.getElementById('sqlEditor').style.lineHeight = '18px';
                //设置只读
                //editor.setReadOnly(true);
                editor.setOptions({
                    //以下三行是设置输入代码提示的配置
                    enableBasicAutocompletion: true,
                    enableSnippets: true,
                    enableLiveAutocompletion: false
                });
                //设置编辑器内容发生改变时，弹出自动补全内容
                editor.on('change', function (e, f) {
                    editor.execCommand('startAutocomplete');
                    textarea.value = editor.getValue();
                });
                editor.focus();
                editor.session.setUseWrapMode(true);
            }
            //设置ACE编辑器的值
            function setEditorValue(strValue) {
                editor.setValue(strValue);
                //清除选择区域
                editor.clearSelection();
                editor.focus();
            }
            $(function () {
                initSqlEditor();
                setEditorValue(testSql);
                $('#lbtnFormat').on('click', function () {
                    //获取ACE编辑器的值
                    var editorValue = editor.getValue();
                    //格式化SQL语句
                    var formatSql = sqlFormatter.format(editorValue, { language: 'sql', indent: '    ' });
                    setEditorValue(formatSql);
                    textarea.value = editor.getValue();
                });
            });
        </script>
    """

    def __init__(self, attrs=None):
        super(SQLEditorWidget, self).__init__(attrs)

    def render(self, name, value, attrs=None, renderer=None):
        result = self.html_template % {'name': name, 'value': value, }
        return mark_safe(result)
