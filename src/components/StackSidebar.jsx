function StackSidebar({ stack, onRemove, onClear }) {
    return (
        <aside className="stack-sidebar">
            <h2>Your Stack ({stack.length})</h2>

            {stack.length === 0 ? (
                <p>No technology selected</p>
            ) : (
                <>
                    <div className="selected-stack">
                        {stack.map((item) => (
                            <div className="stack-item" key={item.id}>
                                <div>
                                    <h4>{item.name}</h4>
                                    <span>{item.category}</span>
                                </div>

                                <button onClick={() => onRemove(item.id)}>
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    <button onClick={onClear}>
                        Remove All
                    </button>
                </>
            )}
        </aside>
    );
}

export default StackSidebar;