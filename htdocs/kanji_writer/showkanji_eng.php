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
$query = "select content from kanji_eng_data where id='$id'";
$results = $conn->query($query);
if($results){
    while($rows = $results->fetch_assoc()){
        echo $rows["content"];
    }
}
$conn->close();
?>
