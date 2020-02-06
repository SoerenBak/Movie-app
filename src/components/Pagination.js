import React from 'react';

const Pagination = (props) => {
    const pageLinks = []

    for( let i = 1; i <= props.pages +1; i++) {
        let active = props.currentPage == i ? 'active' : '';

        pageLinks-PushManager(<li className={`waves-effect ${active}`} key={i} onClick={() => props.nextPage(i)}><a href="#">{i}</a></li>  )
    }

    return
}