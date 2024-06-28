document.querySelector('form').addEventListener('submit', (e) => {
  let conteneur, parent, identite, email, message, span;
  identite = document.getElementById('identite').value;
  email = document.getElementById('email').value;
  message = document.getElementById('message').value;
  span = document.getElementById('notification');
  identite = identite.trim();
  email = email.trim();
  message = message.trim();
  if (identite == "" || message == "" || email == "") {
    e.preventDefault()

    conteneur = document.querySelector('.formulaire');
    conteneur.classList.add('newheight');
    parent = document.getElementById('noti');
    parent.classList.add('newnoti')
    span.innerHTML = "Veuillez remplir Tous les champs vide !";
  }
  else {
    if (identite.length < 10 || message.length < 10) {
      e.preventDefault()
      conteneur = document.querySelector('.formulaire');
      conteneur.classList.add('newheight');
      parent = document.getElementById('noti');
      parent.classList.add('newnoti')
      span.innerHTML = "Le nombre de caracteres et inferieur à la valleurs demande.";
    }
    else {
      // body = "<span style='font-size: 30px;'>nom: <span>" + nom + "<br><span style='font-size: 30px;'>post-nom:<span>" + post_nom + "<br> <span 'font-size: 30px;'>prenom:</span>" > + prenom + "<br><span 'font-size: 30px;'>email:</span>" + email;
      // Email.send({
      //     Host: "smtp.elasticemail.com",
      //     Username: "benybadibanga13@gmail.com",
      //     Password: "268471E8AF66E9C911557791C0139FD8669A",
      //     SecureToken: "9b72545c-fe47-44db-9b54-cbcb62c1f22d",
      //     To: 'benybadibanga13@gmail.com',
      //     From: "benybadibanga13@gmail.com",
      //     Subject: "MESSAGE du site school-center " + nom,
      //     Body: body
      // }).then(
      //     message => alert("message envoye avec succes !")
      // );
    }
  }
});