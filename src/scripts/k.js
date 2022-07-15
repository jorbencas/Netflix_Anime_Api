// express download video blob of web page and save it to local storage
const blob = new Blob([document.body.innerHTML], { type: "text/html" });
const url = URL.createObjectURL(blob);
const link = document.createElement("a");
link.href = url;
link.download = "index.html";
link.click();
URL.revokeObjectURL(url);
link.remove();
