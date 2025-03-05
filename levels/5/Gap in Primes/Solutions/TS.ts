export class G964 {

  public static gap = (g, m, n) => {
    let lastPrime = 0;
    for (let i = m; i < n; i++) {
      if (G964.isPrime(i)) {
        if (lastPrime === 0 || i - lastPrime !== g) {
          lastPrime = i;
        } else {
          return [lastPrime, i];
        }
      }
    }
    return null;
  }

  private static isPrime(n) {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }
}