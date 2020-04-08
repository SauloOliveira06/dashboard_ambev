const BtnLink = (props) => {
  console.log(props.name);
  return props.name.map((aux) => {
    return (
      <button class="material-icons hover:text-yellow-500 focus:outline-none my-5">
        {aux}
      </button>
    );
  });
};

class Sidenav extends React.Component {
  render() {
    const label = ["dashboard", "equalizer", "folder", "description", "cloud"];
    return (
      <aside className="flex flex-col text-center bg-gray-100 w-20 pt-2 border-r border-gray-400">
        <BtnLink name={label} />
      </aside>
    );
  }
}

export default Sidenav;
