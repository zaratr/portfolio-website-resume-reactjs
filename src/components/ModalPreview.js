import React from 'react';
import {Modal, CloseButton, Spinner} from "react-bootstrap";
import {Swiper, SwiperSlide} from 'swiper/react';
import ButtonLink from "./ButtonLink";

// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../style/swiper.css";

// import required modules
import { Autoplay, Lazy, Pagination, Navigation } from "swiper";


class ModalPreview extends React.Component{
    constructor(props) {
        super(props);

    }
    pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    render() {
        return(
            <Modal
                className="unselectable"
                show={this.props.showPreview}
                onHide={this.props.closePreview}
                centered
                scrollable
                dialogClassName="modal-90w"
            >
                <Modal.Header className="bg-secondary text-white fs-5 border-bottom-0">
                    <span className="text-uppercase">{this.props.previewData.title}</span>
                    <CloseButton
                        className="float-end"
                        variant="white"
                        onClick={this.props.closePreview}
                    />
                </Modal.Header>
                <Modal.Body className="bg-light-gray">
                    <Swiper
                        className="mySwiper"
                        lazy={{
                            loadOnTransitionStart: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={this.pagination}
                        navigation={true}
                        modules={[Autoplay, Lazy, Pagination, Navigation]}
                    >
                        {this.props.previewData.images?.map((item, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <img
                                        data-src={`${item}`}
                                        className="swiper-lazy"
                                        alt=""
                                    />
                                    <Spinner className="swiper-lazy-preloader" animation="border" />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                    <div
                        className="m-3 fs-5"
                        dangerouslySetInnerHTML={{
                            __html: this.props.previewData.description,
                        }}
                    ></div>
                </Modal.Body>
                <Modal.Footer className="bg-secondary text-white">
                    {this.props.previewData.live_page !== "undefined" ? (
                        <ButtonLink
                            projectUrl={this.props.previewData.live_page}
                            linkText="Live Page"
                            linkIcon={'images/icon/livelink.png'}
                        />
                    ) : (
                        ""
                    )}

                </Modal.Footer>
            </Modal>
        )
    }
}

export default ModalPreview;
