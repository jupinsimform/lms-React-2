import Data from "../data/Data";

function List() {
  const todos = Data;

  return (
    <>
      <div className="main-list">
        {todos.map((t) => (
          <div className="lists" key={t.id}>
            <p
              className={
                "items" +
                (t.completed === true ? " items-gray" : " items-black")
              }
            >
              {t.value}
            </p>
            <input
              type="checkbox"
              className="check"
              checked={t.completed ? true : false}
              readOnly
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default List;
