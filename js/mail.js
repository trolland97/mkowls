function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_tilrg3t";
  const templateID = "template_yp6f27w";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        window.onbeforeunload = function () {
          window.scrollTo(0, 0);
        }

    })
    .catch(err=>console.log(err));


}