<?php $pCount = $_POST['pizza-count'];
    $pPrice = $_POST['pizza-price'];
    $pTotal = $pCount * $pPrice;
    $lCount = $_POST['lasagna-count'];
    $lPrice = $_POST['lasagna-price'];
    $lTotal = $lCount * $lPrice;
    $food = array($pCount, $pTotal, $lCount, $lTotal);
?>

<html>
    <body>
        <p>You ordered <?php echo $pCount ?> pizza(s) for <?php echo $pTotal ?></p>
        <p>You ordered <?php echo $lCount ?> lasagna(s) for <?php echo $lTotal ?></p>
    </body>
</html>