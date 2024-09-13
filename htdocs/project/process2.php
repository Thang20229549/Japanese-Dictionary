
<head>
<meta charset="UTF-8">
</head>
<?php

// Check if Kanji value is set

    // Database connection parameters
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "dictionary";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare SQL statement with placeholder for Kanji
    $kanji = mysqli_real_escape_string($conn, $_POST['Kanji']);
    $sql = "SELECT meanings FROM Characters WHERE kanji = ?";

    // Prepare statement
    $stmt = $conn->prepare($sql);

    // Bind parameters
    $stmt->bind_param("s", $kanji);

    // Execute statement
    $stmt->execute();

    // Get result
    $result = $stmt->get_result();

    // Fetch data

   if ($result->num_rows == 0) {
        echo "No result found";
   } else {
        while ($row = $result->fetch_assoc()) {
            echo $row['meanings'];
    }
   }

 $stmt->close();
 $conn->close();


?>
