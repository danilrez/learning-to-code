function isPrime([int]$n) {
  if ($n % 2 -eq 0 -or $n % 3 -eq 0) {
    return $n -lt 4
  }
  for ($i = 5; $i * $i -le $n; $i += 6) {
    if ($n % $i -eq 0 -or $n % ($i + 2) -eq 0) {
      return 0
    }
  }
  return 1
}

function gap([int]$g, [int]$m, [int]$n) {
  $a = 0
  $b = 0
  for ($i = $m; $i - 1 -le $n; $i++) {
    if ($b - $a -eq $g) {
      return @($a, $b)
    }
    if (isPrime($i) -eq 1) {
      $a = $b
      $b = $i
    }
  }
  return @()
}