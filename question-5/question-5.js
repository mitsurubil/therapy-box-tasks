function add(a, b) {
    if (!b) {
        return (c) => a + c;
    }
    return a + b;
}