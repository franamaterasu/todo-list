import "./header.scss";

export const Header = () => {
  return (
    <nav className="header navbar navbar-dark bg-dark mb-4">
      <div className="container">
        <h1 className="header__title navbar-brand mb-0 display-1">
          Todo List - React + Typescript
        </h1>
      </div>
    </nav>
  );
};
