export const checkFileAPI = () => {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        // reader = new FileReader();
        return true;
    } else {
        // alert('The File APIs are not fully supported by your browser. Fallback required.');
        return false;
    }
}

export const readText = async (files) => {
    var file = files[0];
    // var textType = /text.*/;

    // if (file.type.match(textType)) {
    //     console.log('text file')
    // } else {
    //     console.log('Not  text file')
    // }
    var reader = new FileReader();
    let res = "";
    reader.onload = function (e) {
        return reader.result;
    }

    res = await reader.readAsText(file);
    return res;

}