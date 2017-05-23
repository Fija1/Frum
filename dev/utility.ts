class Utility {
    public static checkCollision(m: GameObject, n: GameObject): boolean {
                return (m.x < n.x + n.width &&
                        m.x + m.width > n.x &&
                        m.y < n.y + n.height &&
                        m.height + m.y > n.y);
        }
}