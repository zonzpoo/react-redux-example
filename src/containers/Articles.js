import React, { useState } from "react";
import Article from "../components/Article/Article";
import AddArticle from "../components/AddArticle/AddArticle";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addArticle } from "../store/action";

// const Articles = () => {
//     const [articles, setArticles] = useState([
//         {
//             id: 1,
//             title: "post 1",
//             body: "Quisque cursus, metus vitae pharetra",
//         },
//         {
//             id: 2,
//             title: "post 2",
//             body: "Quisque cursus, metus vitae pharetra",
//         },
//     ]);

//     const saveArticle = (v) => {
//         const idKey = articles.length + 1;
//         v["id"] = idKey;
//         const newArticles = articles.concat(v);
//         setArticles(newArticles);
//     };

//     return (
//         <div>
//             <AddArticle saveArticle={saveArticle} />
//             {articles.map((article) => (
//                 <Article key={article.id} article={article} />
//             ))}
//         </div>
//     );
// };

const Articles = ({ articles, saveArticle }) => {
    // const [as, _] = useState(articles);
    // console.log(as);

    return (
        <div>
            <AddArticle saveArticle={saveArticle} />
            {articles.map((article) => (
                <Article key={article.id} article={article} />
            ))}
        </div>
    );
};

Articles.propTypes = {
    articles: PropTypes.array.isRequired,
    saveArticle: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        articles: state.articles,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveArticle: (article) => dispatch(addArticle(article)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
