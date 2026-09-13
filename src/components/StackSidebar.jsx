function StackSidebar({ stack, onRemove, onClear }) {
    return (
        <aside className="stack-sidebar">

            <h2>Your Stack</h2>

            <p className="stack-count">
                {stack.length} Technologies Selected
            </p>

            {stack.length === 0 ? (
                <p className="empty-stack">
                    No technology selected
                </p>
            ) : (
                <>
                    <div className="selected-stack">

                        {stack.map((item) => (
                            <div
                                className="stack-item"
                                key={item.id}
                            >

                                <div>
                                    <h4>{item.name}</h4>
                                    <small>{item.category}</small>
                                </div>

                                <button
                                    className="remove-button"
                                    onClick={() => onRemove(item.id)}
                                >
                                    ×
                                </button>

                            </div>
                        ))}

                    </div>

                    <button
                        className="clear-button"
                        onClick={onClear}
                    >
                        Remove All
                    </button>
                </>
            )}

        </aside>
    );
}

export default StackSidebar;