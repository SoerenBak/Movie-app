import React from 'react';

const SearchBox = (props) => {
    return (
        <div className="row">
            <section className="col s4 offset-s4">
                <form action="" onSubmit={props.handleSubmit}>
                    <div className="input-field">
                        <input placeholder="Search movie" type="text" onChange={props.handleChange}/>
                    </div>
                </form>
            </section>
        </div>

    )
}

export default SearchBox;