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

export const htmlDecode = (s) => {
    var el = document.createElement("div");
    el.innerHTML = s;
    return el.innerText || el.textContent;
}

export const process = (arr) => {

    const res = {};
    const errors = [];
    const warnings = [];
    if (arr[0].type === 'heading' && arr[0].raw.startsWith('# '))
        res.heading = arr[0].text;
    else {
        warnings.push(`h1/Main heading for lean canvas not found`);
    }
    let tmp = arr.findIndex(obj => {
        return obj.type === 'heading' && obj.text.toLowerCase() === 'problem';
    })
    if (tmp === -1) {
        errors.push(`h2/Problem heading for lean canvas not found`);
    }
    else {
        if (tmp + 1 < arr.length && arr[tmp + 1].type !== 'list') {
            warnings.push('No content found for problem');
        }
        else {

        }
    }
    // if (tmp)
    //     res.heading = arr[0].text;
    // else {
    //     warnings.push(`h1/Main heading for lean canvas not found`);
    // }
    res.warnings = warnings;
    res.errors = errors;

    return res;
}