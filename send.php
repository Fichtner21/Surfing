<?php
//zapisujemy otrzymane wartości do zmiennych
$name = isset($_POST['name']) ? $_POST['name'] : '';
$subject = isset($_POST['email']) ? $_POST['email'] : '';
$message = isset($_POST['message']) ? $_POST['message'] : '';
$question= isset($_POST['question']) ? $_POST['question'] : '';

//na wstepie sprawdzamy czy formularz nie zostal wypelniony przez bota:
if( !in_array(strtolower($question),array('kot','kotem') ) ){
	echo json_encode(array('status'=>false,'errors'=>array('question'),'msg'=>"Ty bocie ty!"));
    exit;
}

//przygotowujemy sobie zmienne do zwrocenia
$status = true;
$error = array();
$msg = 'Dziękujemy zapraszamy ponownie';

//tutaj robimy walidację jaką chcemy, ja upewniam się że pole 'name' składa się z przynajmniej 3 znaków i składa się jedynie z liter, liczb, spacji oraz '-'
if( !preg_match("/^([a-zA-z0-9 -]{3,})$/",$name) ){
	//w przypadku niepoprawnego pola ustawiamy status na false i do tablicy $error dodajemy name pola z bledem
	$status = false;
	$error[] = 'name';
}

//tutaj upewniam się ze tytul nie jest pusty
if( !preg_match("/^(.+)$/",$subject) ){
	//w przypadku niepoprawnego pola ustawiamy status na false i do tablicy $error dodajemy name pola z bledem
	$status = false;
	$error[] = 'email';
}

//tutaj upewniam się ze wiadomosc ma przynajmniej 10 znaków
if( !preg_match("/^((.*){10,})$/",$message) ){
	//w przypadku niepoprawnego pola ustawiamy status na false i do tablicy $error dodajemy name pola z bledem
	$status = false;
	$error[] = 'message';
}

//jeżeli wystąpił jakiś błąd zmieniamy komunikat
if( !$status ){

	$msg = "Proszę wypełnić formularz poprawnie";

}else{

	//tutaj robimy co chcemy robić w przypadku poprawnych danych, np zapisujemy do bazy, wysyłamy maila, etc.
	//możemy tu też sprawdzać czy docelowa akcja się powiedzie i jeżeli nie to zmieniamy status na false i msg na konkretną informacę

}

//wyświetlamy wynik całej operacji jako json
echo json_encode(array('status'=>$status,'errors'=>$error,'msg'=>$msg));
exit;
