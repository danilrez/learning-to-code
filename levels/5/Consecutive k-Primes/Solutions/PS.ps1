function Get-KPrimes($num) {
    $i = 2
    $counter = 0
    while($i * $i -le $num) {
        while($num % $i -eq 0) {
            $num /= $i
            $counter++
        }
        $i++
    }
    if ($num -ne 1) {$counter++}
    return $counter
}

function consec-kprimes($k, $arr)
{
$counter = 0
$a = 0
$b = 1
    if ($arr.Count -eq 1 -and (Get-KPrimes $arr[0]) -eq $k) {
        return 0
    }
    else {
        do {
            if ((Get-KPrimes $arr[$a]) -eq $k -and (Get-KPrimes $arr[$b]) -eq $k) {$counter++}
            $a++
            $b++
        }
        until ($b -eq $arr.Count)
    }
return $counter
}