import Graphic from "./graphic";

class Card extends React.Component {
  render() {
    return (
      <div className="bg-white rounded overflow-hidden">
        <div className="px-6 py-4">
          <div className="text-md mb-2 border-b border-gray-400">
            Nome do Gráfico via API
          </div>
          <div className="mt-5">
            <Graphic />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
