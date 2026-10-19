<?php
$studentName = "Lhealou Jhay";
$score = 90;


if (is_numeric($score) && $score >= 0 && $score <= 100) {

  
    if ($score >= 75) {
        $status = "Passed";

        if ($score >= 90) {
            $grade = "Excellent";
        } elseif ($score >= 85) {
            $grade = "Very Good";
        } elseif ($score >= 80) {
            $grade = "Good";
        } else {
            $grade = "Fair";
        }

    } else {
        $grade = "Failed";
        $status = "Failed";
    }

} else {
    $grade = "Enter number 0-100"; 
    $status = "Enter number 0-100";
}


echo "Student Name: " . $studentName . "<br>";
echo "Score: " . $score . "<br>";
echo "Grade: " . $grade . "<br>";
echo "Status: " . $status;
?>