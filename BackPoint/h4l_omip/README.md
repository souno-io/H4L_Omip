# H4L-OMIP

H4L运营管理系统

[![Built with Cookiecutter Django](https://img.shields.io/badge/built%20with-Cookiecutter%20Django-ff69b4.svg?logo=cookiecutter)](https://github.com/cookiecutter/cookiecutter-django/)
[![Black code style](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/ambv/black)

## 设置

查看更多请点击 [settings](http://cookiecutter-django.readthedocs.io/en/latest/settings.html).

## 基础命令

### 设置你的账户

- 要创建**普通用户帐户**，只需转到注册并填写表单。提交后，您将看到“验证您的电子邮件地址”页面。转到您的主机以查看模拟的电子邮件验证消息。将链接复制到浏览器中。现在，用户的电子邮件应该经过验证并准备就绪。
- 要创建**超级用户帐户**，请使用以下命令：

  $ python manage.py createsuperuser

为方便起见，您可以让普通用户在 Chrome 上登录，让您的超级用户在 Firefox（或类似用户）上登录，以便您可以看到网站在这两种用户的行为方式。

### 类型检查

使用 mypy 运行类型检查:

$ mypy h4l_omip
### 测试覆盖率

使用以下命令运行测试，检查测试覆盖率并生成 HTML 覆盖率报告:

$ coverage run -m pytest
$ coverage html
$ open htmlcov/index.html
#### 使用 pytest 运行测试

$ pytest
### 实时重新加载和 Sass CSS 编译

Moved to [Live reloading and SASS compilation](https://cookiecutter-django.readthedocs.io/en/latest/developing-locally.html#sass-compilation-live-reloading).

### Celery

这个程序附带了Celery.

运行 celery worker:

```bash
cd h4l_omip
celery -A config.celery_app worker -l info
```
请注意：要使Celery的导入魔法起作用，运行Celery命令的位置很重要。如果您与 *manage.py* 位于同一文件夹中，您应该是对的。

## 部署

下面详细介绍了如何部署此应用程序.

### Docker

查看详细 [cookiecutter-django Docker documentation](http://cookiecutter-django.readthedocs.io/en/latest/deployment-with-docker.html).
