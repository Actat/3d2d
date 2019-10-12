window.onload = function() {
    document.getElementById("saveimgbtn").addEventListener("click", function() {
        var link = document.createElement("a");
        const canvas = document.getElementById("canvas");
        link.href = canvas.toDataURL();
        link.download = "image.png";
        link.click();
    });
}