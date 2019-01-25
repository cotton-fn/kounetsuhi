import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = state => ({
  items: state.items
});

export default connect(mapStateToProps)(({ items }) => (
  <nav>
    <ul>
      <li>
        <Link to="/">ホーム</Link>
      </li>
      <li>
        <Link to="/edit">光熱費入力</Link>
      </li>
      <li>
        光熱費一覧▼
        <ul>
          {
            items.data.map((item, index) => <li key={item.id}>
              {item.name}
            </li>)
          }
        </ul>
      </li>
      <li>
        <Link to="/add">光熱費追加</Link>
      </li>
    </ul>
  </nav>
));
