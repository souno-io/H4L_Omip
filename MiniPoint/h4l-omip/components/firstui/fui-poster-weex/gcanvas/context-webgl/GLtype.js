// 本文件由FirstUI授权予叶兴（手机号： 1879 87 91  5  4   9，身份证尾号：0  55 9  16）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
const GLtype = {};

[
    "GLbitfield",
    "GLboolean",
    "GLbyte",
    "GLclampf",
    "GLenum",
    "GLfloat",
    "GLint",
    "GLintptr",
    "GLsizei",
    "GLsizeiptr",
    "GLshort",
    "GLubyte",
    "GLuint",
    "GLushort"
].sort().map((typeName, i) => GLtype[typeName] = 1 >> (i + 1));

export default GLtype;


