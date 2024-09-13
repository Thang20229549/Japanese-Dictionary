<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

</head>




<body>

<form action="index.php" method="POST">
Word: <input type="text" name="Kanji"><br>
<input type="submit">
</form>



<?php

// Check if Kanji value is set
if (isset($_POST["Kanji"])) {
    // Database connection parameters
    $servername = "localhost";
    $username = "root";
    $password = "thang";
    $database = "dictionary";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare SQL statement with placeholder for Kanji
    $kanji = $_POST["Kanji"];
    $sql = "SELECT Imi FROM jisho WHERE Kanji = ?";

    // Prepare statement
    $stmt = $conn->prepare($sql);

    // Bind parameters
    $stmt->bind_param("s", $kanji);

    // Execute statement
    $stmt->execute();

    // Get result
    $result = $stmt->get_result();

    // Fetch data

    echo $kanji . "<br>";
    $rowNumber = 1;
    if ($result->fetch_assoc()==0) {
        echo "no result found";
    } else {
        while ($row = $result->fetch_assoc()) {
            // Process fetched data
            echo "$rowNumber. ";
            foreach ($row as $key => $value) {
                echo "$value";
            }
            echo "<br>";
            $rowNumber++; // Increment row counter
        }    
    }

// Sample array with Japanese Kanji characters
$kanji = mb_str_split($kanji);

// Loop through each character and output it
foreach ($kanji as $x) {
    echo $x . "<br>";
}
    // Close statement and connection
    $stmt->close();
    $conn->close();
}
?>

</body>
</html>


