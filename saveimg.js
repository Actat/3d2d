window.onload = function() {
    document.getElementById("saveimgbtn").addEventListener("click", function() {
        var link = document.createElement("a");
        const canvas = document.getElementById("canvas");
        canvas.getContext("experimental-webgl", {preserveDrawingBuffer: true});
        link.href = canvas.toDataURL();
        link.download = "image.png";
        link.click();
    });
}