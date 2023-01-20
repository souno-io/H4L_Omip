// 本文件由FirstUI授权予叶兴（手机号：1 8 7 98 79 1 5   4 9，身份证尾号：05    59 16）专用，请尊重知识产权，勿私下传播，违者追究法律责任。

export function ArrayBufferToBase64 (buffer) {
    var binary = '';
    var bytes = new Uint8ClampedArray(buffer);
    for (var len = bytes.byteLength, i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}

export function Base64ToUint8ClampedArray(base64String) {
	const padding = '='.repeat((4 - base64String.length % 4) % 4);
	const base64 = (base64String + padding)
		.replace(/\-/g, '+')
		.replace(/_/g, '/');

	const rawData = atob(base64);
	const outputArray = new Uint8ClampedArray(rawData.length);

	for (let i = 0; i < rawData.length; ++i) {
		outputArray[i] = rawData.charCodeAt(i);
	}
	return outputArray;
}