class Sidenav extends React.Component {
  render() {
    return (
      <aside className="flex flex-col text-center bg-gray-100 w-20 py-6 border-r border-gray-400">
        <span class="material-icons mb-5">dashboard</span>
        <span class="material-icons my-5">equalizer</span>
        <span class="material-icons my-5">folder</span>
        <span class="material-icons my-5">description</span>
        <span class="material-icons my-5">poll</span>
        <span class="material-icons my-5">cloud</span>
      </aside>
    );
  }
}

export default Sidenav;
