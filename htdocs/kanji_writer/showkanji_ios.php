<?php 
$servername = "localhost";
$username = "haunguye_tien";
$password = "hoangtien@12345";
$dbname = "haunguye_tien";
$content = '';
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
$conn->set_charset("utf8");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo chr(0xEF).chr(0xBB).chr(0xBF);
$id = $_GET["id"];
$query = "select content from kanji where id='$id'";
$results = $conn->query($query);
if($results){
    while($rows = $results->fetch_assoc()){
    	$styleString = "<style>body{font-size: 35px} table{font-size: 25px} .kanji-draw-again button{font-size: 22px} .drawing-kanji #image-holder-conti{width: 300px; height: 300px}</style>";
        echo $rows["content"].$styleString;
    }
}
$conn->close();
?>
