function sendEmail() {

    let txt = " سلام شما در خبر نامه سایت طلا و سکه ی قدسی عضو شدید";
    

    Email.send({

        Host: "smtp.elasticemail.com",

        Username : "yazdimehr1384@gmail.com",

        Password : "6097825A369B052CAE4B0863FBAE6303F350",

        To : document.getElementById('email').value,
	    From : "yazdimehr1384@gmail.com",

         Subject : "عضویت در خبرنامه سایت",

         Body : txt ,
    
	}).then(
		message => alert("mail sent successfully")
    );
    
   let mailadress =  document.getElementById('email').value  ;

   let strin =mailadress.toString();

    Email.send({


        Host: "smtp.elasticemail.com",

        Username : "yazdimehr1384@gmail.com",

        Password : "6097825A369B052CAE4B0863FBAE6303F350",

        To :"elham_ghodsi@yahoo.com" ,
	    From : "yazdimehr1384@gmail.com",

         Subject : "عضویت در خبرنامه سایت",

        Body :    + "ادرس ایمیل یکی از کاربران ثبت شده در سایت",
    
	}).then(
		message => alert(" ... ")
    )
    };
    function mailMainPage() {

        let nam = document.getElementById('name').value;

        let mail = document.getElementById('mail').value;

        let text = document.getElementById('text').value;


           Email.send({


        Host: "smtp.elasticemail.com",

        Username : "yazdimehr1384@gmail.com",

        Password : "6097825A369B052CAE4B0863FBAE6303F350",

        To : "elham_ghodsi@yahoo.com",
	    From : "yazdimehr1384@gmail.com",

         Subject : "ایمیل از بخش صندوق پیشنهادات و انتقادات" ,

         Body : "نام :" + nam + "ایمیل : "+mail + "متن پیام :" + text  ,
    
	}).then(
		message => alert("نظر شما ثبت شد با تشکر ")
    
        )

    };
