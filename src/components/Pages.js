import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";

const Pages = observer(() => {
    const {add} = useContext(Context)
    let between1 = true
    let between2 = true

    const pageCount = Math.ceil(add.totalCount / add.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination className="mt-5 mb-5">
            {!pages.length ?
                <h5>
                    По Вашему запросу не нашлось ни одного подходящего варианта.
                    Попробуйте использовать меньше фильтров или проверьте корректность их использования.
                    Мы уже работаем над увеличением базы объектов. Приносим извинения за предоставленные неудобства.
                </h5>
                :
                <>
                    {pages.map(page =>
                        (page < (add.page + 3) && page > (add.page - 3)) || page === 1 || page === pageCount ?
                            <Pagination.Item
                                key={page}
                                active={add.page === page}
                                onClick={() => add.setPage(page)}
                            >
                                {page}
                            </Pagination.Item>
                        :
                        (between1 && page > (add.page) ?
                            <>
                                <Pagination.Ellipsis key={page}/>
                                {between1 = false}
                            </>
                        :
                            (between2 && page < (add.page) ?
                                    <>
                                    <Pagination.Ellipsis key={page}/>
                                    {between2 = false}
                                    </>
                                    :
                                    <></>
                                )
                            )
                        )
                    }
                </>
            }
        </Pagination>
    );
});

export default Pages;



