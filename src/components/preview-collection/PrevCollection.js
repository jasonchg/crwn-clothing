import React from "react";
import CollectionItem from "../../components/collection-item/CollectionItem";

import "./PrevCollection.styles.scss";

export default function PrevCollection({ title, items }) {
  return (
    <div className="collection-preview">
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

// .filter(variable or array, indexes)
