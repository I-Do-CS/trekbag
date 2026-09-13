function Counter({ stats }) {
    return (
        <div>
            <b>{stats.packed}</b> / {stats.total} items packed
        </div>
    );
}

export default Counter;
