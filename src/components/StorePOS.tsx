import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const StorePOSLayer = () => {
    return (
        <div className='card h-100 p-0 radius-12'>
            <div className='card-header border-bottom bg-base py-16 px-24 d-flex align-items-center flex-wrap gap-3 justify-content-between'>
                <div className='d-flex align-items-center flex-wrap gap-3'>
          <span className='text-md fw-medium text-secondary-light mb-0'>
            Select store
          </span>
                    <form className='navbar-search'>
                        <input
                            type='text'
                            className='bg-base h-40-px w-auto'
                            name='search'
                            placeholder='Search'
                        />
                        <Icon icon='ion:search-outline' className='icon' />
                    </form>
                </div>

            </div>
            <div className='card-body p-24'>
                <div className='row gy-4'>
                    <div className='col-xxl-3 col-md-6 user-grid-card   '>
                        <div className='position-relative border radius-16 overflow-hidden'>
                            <img
                                src='/assets/images/user-grid/meow-grid-bg1.png'
                                alt='Store'
                                className='w-100 object-fit-cover'
                            />
                            <div className='dropdown position-absolute top-0 end-0 me-16 mt-16'>
                                <button
                                    type='button'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                    className='bg-white-gradient-light w-32-px h-32-px radius-8 border border-light-white d-flex justify-content-center align-items-center text-white'
                                >
                                    <Icon icon='entypo:dots-three-vertical' className='icon ' />
                                </button>
                                <ul className='dropdown-menu p-12 border bg-base shadow'>
                                    <li>
                                        <Link
                                            className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10'
                                            to='#'
                                        >
                                            Edit
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            type='button'
                                            className='delete-btn dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-danger-100 text-hover-danger-600 d-flex align-items-center gap-10'
                                        >
                                            Delete
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className='ps-16 pb-16 pe-16 text-center mt--50'>
                                <img
                                    src='/assets/images/user-grid/store-logo.png'
                                    alt='WowDash React Vite'
                                    className='border br-white border-width-2-px w-100-px h-100-px rounded-circle object-fit-cover'
                                />
                                <h6 className='text-lg mb-0 mt-4'>Name Store</h6>
                                <span className='text-secondary-light mb-16'>
                  Address
                </span>
                                <div className='center-border position-relative bg-danger-gradient-light radius-8 p-12 d-flex align-items-center gap-4'>
                                    <div className='text-center w-50'>
                                        <h6 className='text-md mb-0'>Tax</h6>
                                        <span className='text-secondary-light text-sm mb-0'>
                      11 %
                    </span>
                                    </div>
                                    <div className='text-center w-50'>
                                        <h6 className='text-md mb-0'>Service Charge</h6>
                                        <span className='text-secondary-light text-sm mb-0'>
                      10 %
                    </span>
                                    </div>
                                </div>
                                <Link
                                    to='/'
                                    className='bg-primary-50 text-primary-600 bg-hover-primary-600 hover-text-white p-10 text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center justify-content-center mt-16 fw-medium gap-2 w-100'
                                >
                                    Select Store
                                    <Icon
                                        icon='solar:alt-arrow-right-linear'
                                        className='icon text-xl line-height-1'
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-3 col-md-6 user-grid-card   '>
                        <div className='position-relative border radius-16 overflow-hidden'>
                            <img
                                src='/assets/images/user-grid/meow-grid-bg1.png'
                                alt='WowDash React Vite'
                                className='w-100 object-fit-cover'
                            />
                            <div className='dropdown position-absolute top-0 end-0 me-16 mt-16'>
                                <button
                                    type='button'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                    className='bg-white-gradient-light w-32-px h-32-px radius-8 border border-light-white d-flex justify-content-center align-items-center text-white'
                                >
                                    <Icon icon='entypo:dots-three-vertical' className='icon ' />
                                </button>
                                <ul className='dropdown-menu p-12 border bg-base shadow'>
                                    <li>
                                        <Link
                                            className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10'
                                            to='#'
                                        >
                                            Edit
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            type='button'
                                            className='delete-btn dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-danger-100 text-hover-danger-600 d-flex align-items-center gap-10'
                                        >
                                            Delete
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className='ps-16 pb-16 pe-16 text-center mt--50'>
                                <img
                                    src='/assets/images/user-grid/store-logo.png'
                                    alt='WowDash React Vite'
                                    className='border br-white border-width-2-px w-100-px h-100-px rounded-circle object-fit-cover'
                                />
                                <h6 className='text-lg mb-0 mt-4'>Darrell Steward</h6>
                                <span className='text-secondary-light mb-16'>
                  Address
                </span>
                                <div className='center-border position-relative bg-danger-gradient-light radius-8 p-12 d-flex align-items-center gap-4'>
                                    <div className='text-center w-50'>
                                        <h6 className='text-md mb-0'>Tax</h6>
                                        <span className='text-secondary-light text-sm mb-0'>
                      11 %
                    </span>
                                    </div>
                                    <div className='text-center w-50'>
                                        <h6 className='text-md mb-0'>Service Charge</h6>
                                        <span className='text-secondary-light text-sm mb-0'>
                      10 %
                    </span>
                                    </div>
                                </div>
                                <Link
                                    to='/'
                                    className='bg-primary-50 text-primary-600 bg-hover-primary-600 hover-text-white p-10 text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center justify-content-center mt-16 fw-medium gap-2 w-100'
                                >
                                    Select Store
                                    <Icon
                                        icon='solar:alt-arrow-right-linear'
                                        className='icon text-xl line-height-1'
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-3 col-md-6 user-grid-card   '>
                        <div className='position-relative border radius-16 overflow-hidden'>
                            <img
                                src='/assets/images/user-grid/meow-grid-bg1.png'
                                alt='WowDash React Vite'
                                className='w-100 object-fit-cover'
                            />
                            <div className='dropdown position-absolute top-0 end-0 me-16 mt-16'>
                                <button
                                    type='button'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                    className='bg-white-gradient-light w-32-px h-32-px radius-8 border border-light-white d-flex justify-content-center align-items-center text-white'
                                >
                                    <Icon icon='entypo:dots-three-vertical' className='icon ' />
                                </button>
                                <ul className='dropdown-menu p-12 border bg-base shadow'>
                                    <li>
                                        <Link
                                            className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10'
                                            to='#'
                                        >
                                            Edit
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            type='button'
                                            className='delete-btn dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-danger-100 text-hover-danger-600 d-flex align-items-center gap-10'
                                        >
                                            Delete
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className='ps-16 pb-16 pe-16 text-center mt--50'>
                                <img
                                    src='/assets/images/user-grid/store-logo.png'
                                    alt='WowDash React Vite'
                                    className='border br-white border-width-2-px w-100-px h-100-px rounded-circle object-fit-cover'
                                />
                                <h6 className='text-lg mb-0 mt-4'>Jerome Bell</h6>
                                <span className='text-secondary-light mb-16'>
                  Address
                </span>
                                <div className='center-border position-relative bg-danger-gradient-light radius-8 p-12 d-flex align-items-center gap-4'>
                                    <div className='text-center w-50'>
                                        <h6 className='text-md mb-0'>Tax</h6>
                                        <span className='text-secondary-light text-sm mb-0'>
                      11 %
                    </span>
                                    </div>
                                    <div className='text-center w-50'>
                                        <h6 className='text-md mb-0'>Service Charge</h6>
                                        <span className='text-secondary-light text-sm mb-0'>
                      10 %
                    </span>
                                    </div>
                                </div>
                                <Link
                                    to='/'
                                    className='bg-primary-50 text-primary-600 bg-hover-primary-600 hover-text-white p-10 text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center justify-content-center mt-16 fw-medium gap-2 w-100'
                                >
                                    Select Store
                                    <Icon
                                        icon='solar:alt-arrow-right-linear'
                                        className='icon text-xl line-height-1'
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-3 col-md-6 user-grid-card   '>
                        <div className='position-relative border radius-16 overflow-hidden'>
                            <img
                                src='/assets/images/user-grid/meow-grid-bg1.png'
                                alt='WowDash React Vite'
                                className='w-100 object-fit-cover'
                            />
                            <div className='dropdown position-absolute top-0 end-0 me-16 mt-16'>
                                <button
                                    type='button'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                    className='bg-white-gradient-light w-32-px h-32-px radius-8 border border-light-white d-flex justify-content-center align-items-center text-white'
                                >
                                    <Icon icon='entypo:dots-three-vertical' className='icon ' />
                                </button>
                                <ul className='dropdown-menu p-12 border bg-base shadow'>
                                    <li>
                                        <Link
                                            className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10'
                                            to='#'
                                        >
                                            Edit
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            type='button'
                                            className='delete-btn dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-danger-100 text-hover-danger-600 d-flex align-items-center gap-10'
                                        >
                                            Delete
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className='ps-16 pb-16 pe-16 text-center mt--50'>
                                <img
                                    src='/assets/images/user-grid/store-logo.png'
                                    alt='WowDash React Vite'
                                    className='border br-white border-width-2-px w-100-px h-100-px rounded-circle object-fit-cover'
                                />
                                <h6 className='text-lg mb-0 mt-4'>Eleanor Pena</h6>
                                <span className='text-secondary-light mb-16'>
                  Address
                </span>
                                <div className='center-border position-relative bg-danger-gradient-light radius-8 p-12 d-flex align-items-center gap-4'>
                                    <div className='text-center w-50'>
                                        <h6 className='text-md mb-0'>Tax</h6>
                                        <span className='text-secondary-light text-sm mb-0'>
                      11 %
                    </span>
                                    </div>
                                    <div className='text-center w-50'>
                                        <h6 className='text-md mb-0'>Service Charge</h6>
                                        <span className='text-secondary-light text-sm mb-0'>
                      10 %
                    </span>
                                    </div>
                                </div>
                                <Link
                                    to='/'
                                    className='bg-primary-50 text-primary-600 bg-hover-primary-600 hover-text-white p-10 text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center justify-content-center mt-16 fw-medium gap-2 w-100'
                                >
                                    Select Store
                                    <Icon
                                        icon='solar:alt-arrow-right-linear'
                                        className='icon text-xl line-height-1'
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-3 col-md-6 user-grid-card   '>
                        <div className='position-relative border radius-16 overflow-hidden'>
                            <img
                                src='/assets/images/user-grid/meow-grid-bg1.png'
                                alt='WowDash React Vite'
                                className='w-100 object-fit-cover'
                            />
                            <div className='dropdown position-absolute top-0 end-0 me-16 mt-16'>
                                <button
                                    type='button'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                    className='bg-white-gradient-light w-32-px h-32-px radius-8 border border-light-white d-flex justify-content-center align-items-center text-white'
                                >
                                    <Icon icon='entypo:dots-three-vertical' className='icon ' />
                                </button>
                                <ul className='dropdown-menu p-12 border bg-base shadow'>
                                    <li>
                                        <Link
                                            className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10'
                                            to='#'
                                        >
                                            Edit
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            type='button'
                                            className='delete-btn dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-danger-100 text-hover-danger-600 d-flex align-items-center gap-10'
                                        >
                                            Delete
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className='ps-16 pb-16 pe-16 text-center mt--50'>
                                <img
                                    src='/assets/images/user-grid/store-logo.png'
                                    alt='WowDash React Vite'
                                    className='border br-white border-width-2-px w-100-px h-100-px rounded-circle object-fit-cover'
                                />
                                <h6 className='text-lg mb-0 mt-4'>Ralph Edwards</h6>
                                <span className='text-secondary-light mb-16'>
                  Address
                </span>
                                <div className='center-border position-relative bg-danger-gradient-light radius-8 p-12 d-flex align-items-center gap-4'>
                                    <div className='text-center w-50'>
                                        <h6 className='text-md mb-0'>Tax</h6>
                                        <span className='text-secondary-light text-sm mb-0'>
                      11 %
                    </span>
                                    </div>
                                    <div className='text-center w-50'>
                                        <h6 className='text-md mb-0'>Service Charge</h6>
                                        <span className='text-secondary-light text-sm mb-0'>
                      10 %
                    </span>
                                    </div>
                                </div>
                                <Link
                                    to='/'
                                    className='bg-primary-50 text-primary-600 bg-hover-primary-600 hover-text-white p-10 text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center justify-content-center mt-16 fw-medium gap-2 w-100'
                                >
                                    Select Store
                                    <Icon
                                        icon='solar:alt-arrow-right-linear'
                                        className='icon text-xl line-height-1'
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-3 col-md-6 user-grid-card   '>
                        <div className='position-relative border radius-16 overflow-hidden'>
                            <img
                                src='/assets/images/user-grid/meow-grid-bg1.png'
                                alt='WowDash React Vite'
                                className='w-100 object-fit-cover'
                            />
                            <div className='dropdown position-absolute top-0 end-0 me-16 mt-16'>
                                <button
                                    type='button'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                    className='bg-white-gradient-light w-32-px h-32-px radius-8 border border-light-white d-flex justify-content-center align-items-center text-white'
                                >
                                    <Icon icon='entypo:dots-three-vertical' className='icon ' />
                                </button>
                                <ul className='dropdown-menu p-12 border bg-base shadow'>
                                    <li>
                                        <Link
                                            className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10'
                                            to='#'
                                        >
                                            Edit
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            type='button'
                                            className='delete-btn dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-danger-100 text-hover-danger-600 d-flex align-items-center gap-10'
                                        >
                                            Delete
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className='ps-16 pb-16 pe-16 text-center mt--50'>
                                <img
                                    src='/assets/images/user-grid/store-logo.png'
                                    alt='WowDash React Vite'
                                    className='border br-white border-width-2-px w-100-px h-100-px rounded-circle object-fit-cover'
                                />
                                <h6 className='text-lg mb-0 mt-4'>Annette Black</h6>
                                <span className='text-secondary-light mb-16'>
                  Address
                </span>
                                <div className='center-border position-relative bg-danger-gradient-light radius-8 p-12 d-flex align-items-center gap-4'>
                                    <div className='text-center w-50'>
                                        <h6 className='text-md mb-0'>Tax</h6>
                                        <span className='text-secondary-light text-sm mb-0'>
                      11 %
                    </span>
                                    </div>
                                    <div className='text-center w-50'>
                                        <h6 className='text-md mb-0'>Service Charge</h6>
                                        <span className='text-secondary-light text-sm mb-0'>
                      10 %
                    </span>
                                    </div>
                                </div>
                                <Link
                                    to='/'
                                    className='bg-primary-50 text-primary-600 bg-hover-primary-600 hover-text-white p-10 text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center justify-content-center mt-16 fw-medium gap-2 w-100'
                                >
                                    Select Store
                                    <Icon
                                        icon='solar:alt-arrow-right-linear'
                                        className='icon text-xl line-height-1'
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-3 col-md-6 user-grid-card   '>
                        <div className='position-relative border radius-16 overflow-hidden'>
                            <img
                                src='/assets/images/user-grid/meow-grid-bg1.png'
                                alt='WowDash React Vite'
                                className='w-100 object-fit-cover'
                            />
                            <div className='dropdown position-absolute top-0 end-0 me-16 mt-16'>
                                <button
                                    type='button'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                    className='bg-white-gradient-light w-32-px h-32-px radius-8 border border-light-white d-flex justify-content-center align-items-center text-white'
                                >
                                    <Icon icon='entypo:dots-three-vertical' className='icon ' />
                                </button>
                                <ul className='dropdown-menu p-12 border bg-base shadow'>
                                    <li>
                                        <Link
                                            className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10'
                                            to='#'
                                        >
                                            Edit
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            type='button'
                                            className='delete-btn dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-danger-100 text-hover-danger-600 d-flex align-items-center gap-10'
                                        >
                                            Delete
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className='ps-16 pb-16 pe-16 text-center mt--50'>
                                <img
                                    src='/assets/images/user-grid/store-logo.png'
                                    alt='WowDash React Vite'
                                    className='border br-white border-width-2-px w-100-px h-100-px rounded-circle object-fit-cover'
                                />
                                <h6 className='text-lg mb-0 mt-4'>Robert Fox</h6>
                                <span className='text-secondary-light mb-16'>
                  Address
                </span>
                                <div className='center-border position-relative bg-danger-gradient-light radius-8 p-12 d-flex align-items-center gap-4'>
                                    <div className='text-center w-50'>
                                        <h6 className='text-md mb-0'>Tax</h6>
                                        <span className='text-secondary-light text-sm mb-0'>
                      11 %
                    </span>
                                    </div>
                                    <div className='text-center w-50'>
                                        <h6 className='text-md mb-0'>Service Charge</h6>
                                        <span className='text-secondary-light text-sm mb-0'>
                      10 %
                    </span>
                                    </div>
                                </div>
                                <Link
                                    to='/'
                                    className='bg-primary-50 text-primary-600 bg-hover-primary-600 hover-text-white p-10 text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center justify-content-center mt-16 fw-medium gap-2 w-100'
                                >
                                    Select Store
                                    <Icon
                                        icon='solar:alt-arrow-right-linear'
                                        className='icon text-xl line-height-1'
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-3 col-md-6 user-grid-card   '>
                        <div className='position-relative border radius-16 overflow-hidden'>
                            <img
                                src='/assets/images/user-grid/meow-grid-bg1.png'
                                alt='WowDash React Vite'
                                className='w-100 object-fit-cover'
                            />
                            <div className='dropdown position-absolute top-0 end-0 me-16 mt-16'>
                                <button
                                    type='button'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                    className='bg-white-gradient-light w-32-px h-32-px radius-8 border border-light-white d-flex justify-content-center align-items-center text-white'
                                >
                                    <Icon icon='entypo:dots-three-vertical' className='icon ' />
                                </button>
                                <ul className='dropdown-menu p-12 border bg-base shadow'>
                                    <li>
                                        <Link
                                            className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10'
                                            to='#'
                                        >
                                            Edit
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            type='button'
                                            className='delete-btn dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-danger-100 text-hover-danger-600 d-flex align-items-center gap-10'
                                        >
                                            Delete
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className='ps-16 pb-16 pe-16 text-center mt--50'>
                                <img
                                    src='/assets/images/user-grid/store-logo.png'
                                    alt='WowDash React Vite'
                                    className='border br-white border-width-2-px w-100-px h-100-px rounded-circle object-fit-cover'
                                />
                                <h6 className='text-lg mb-0 mt-4'>Albert Flores</h6>
                                <span className='text-secondary-light mb-16'>
                  Address
                </span>
                                <div className='center-border position-relative bg-danger-gradient-light radius-8 p-12 d-flex align-items-center gap-4'>
                                    <div className='text-center w-50'>
                                        <h6 className='text-md mb-0'>Tax</h6>
                                        <span className='text-secondary-light text-sm mb-0'>
                      11 %
                    </span>
                                    </div>
                                    <div className='text-center w-50'>
                                        <h6 className='text-md mb-0'>Service Charge</h6>
                                        <span className='text-secondary-light text-sm mb-0'>
                      10 %
                    </span>
                                    </div>
                                </div>
                                <Link
                                    to='/'
                                    className='bg-primary-50 text-primary-600 bg-hover-primary-600 hover-text-white p-10 text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center justify-content-center mt-16 fw-medium gap-2 w-100'
                                >
                                    Select Store
                                    <Icon
                                        icon='solar:alt-arrow-right-linear'
                                        className='icon text-xl line-height-1'
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-3 col-md-6 user-grid-card   '>
                        <div className='position-relative border radius-16 overflow-hidden'>
                            <img
                                src='/assets/images/user-grid/meow-grid-bg1.png'
                                alt='WowDash React Vite'
                                className='w-100 object-fit-cover'
                            />
                            <div className='dropdown position-absolute top-0 end-0 me-16 mt-16'>
                                <button
                                    type='button'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                    className='bg-white-gradient-light w-32-px h-32-px radius-8 border border-light-white d-flex justify-content-center align-items-center text-white'
                                >
                                    <Icon icon='entypo:dots-three-vertical' className='icon ' />
                                </button>
                                <ul className='dropdown-menu p-12 border bg-base shadow'>
                                    <li>
                                        <Link
                                            className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10'
                                            to='#'
                                        >
                                            Edit
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            type='button'
                                            className='delete-btn dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-danger-100 text-hover-danger-600 d-flex align-items-center gap-10'
                                        >
                                            Delete
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className='ps-16 pb-16 pe-16 text-center mt--50'>
                                <img
                                    src='/assets/images/user-grid/store-logo.png'
                                    alt='WowDash React Vite'
                                    className='border br-white border-width-2-px w-100-px h-100-px rounded-circle object-fit-cover'
                                />
                                <h6 className='text-lg mb-0 mt-4'>Dianne Russell</h6>
                                <span className='text-secondary-light mb-16'>
                  Address
                </span>
                                <div className='center-border position-relative bg-danger-gradient-light radius-8 p-12 d-flex align-items-center gap-4'>
                                    <div className='text-center w-50'>
                                        <h6 className='text-md mb-0'>Tax</h6>
                                        <span className='text-secondary-light text-sm mb-0'>
                      11 %
                    </span>
                                    </div>
                                    <div className='text-center w-50'>
                                        <h6 className='text-md mb-0'>Service Charge</h6>
                                        <span className='text-secondary-light text-sm mb-0'>
                      10 %
                    </span>
                                    </div>
                                </div>
                                <Link
                                    to='/'
                                    className='bg-primary-50 text-primary-600 bg-hover-primary-600 hover-text-white p-10 text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center justify-content-center mt-16 fw-medium gap-2 w-100'
                                >
                                    Select Store
                                    <Icon
                                        icon='solar:alt-arrow-right-linear'
                                        className='icon text-xl line-height-1'
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-3 col-md-6 user-grid-card   '>
                        <div className='position-relative border radius-16 overflow-hidden'>
                            <img
                                src='/assets/images/user-grid/meow-grid-bg1.png'
                                alt='WowDash React Vite'
                                className='w-100 object-fit-cover'
                            />
                            <div className='dropdown position-absolute top-0 end-0 me-16 mt-16'>
                                <button
                                    type='button'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                    className='bg-white-gradient-light w-32-px h-32-px radius-8 border border-light-white d-flex justify-content-center align-items-center text-white'
                                >
                                    <Icon icon='entypo:dots-three-vertical' className='icon ' />
                                </button>
                                <ul className='dropdown-menu p-12 border bg-base shadow'>
                                    <li>
                                        <Link
                                            className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10'
                                            to='#'
                                        >
                                            Edit
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            type='button'
                                            className='delete-btn dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-danger-100 text-hover-danger-600 d-flex align-items-center gap-10'
                                        >
                                            Delete
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className='ps-16 pb-16 pe-16 text-center mt--50'>
                                <img
                                    src='/assets/images/user-grid/store-logo.png'
                                    alt='WowDash React Vite'
                                    className='border br-white border-width-2-px w-100-px h-100-px rounded-circle object-fit-cover'
                                />
                                <h6 className='text-lg mb-0 mt-4'>Esther Howard</h6>
                                <span className='text-secondary-light mb-16'>
                  Address
                </span>
                                <div className='center-border position-relative bg-danger-gradient-light radius-8 p-12 d-flex align-items-center gap-4'>
                                    <div className='text-center w-50'>
                                        <h6 className='text-md mb-0'>Tax</h6>
                                        <span className='text-secondary-light text-sm mb-0'>
                      11 %
                    </span>
                                    </div>
                                    <div className='text-center w-50'>
                                        <h6 className='text-md mb-0'>Service Charge</h6>
                                        <span className='text-secondary-light text-sm mb-0'>
                      10 %
                    </span>
                                    </div>
                                </div>
                                <Link
                                    to='/'
                                    className='bg-primary-50 text-primary-600 bg-hover-primary-600 hover-text-white p-10 text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center justify-content-center mt-16 fw-medium gap-2 w-100'
                                >
                                    Select Store
                                    <Icon
                                        icon='solar:alt-arrow-right-linear'
                                        className='icon text-xl line-height-1'
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-3 col-md-6 user-grid-card   '>
                        <div className='position-relative border radius-16 overflow-hidden'>
                            <img
                                src='/assets/images/user-grid/meow-grid-bg1.png'
                                alt='WowDash React Vite'
                                className='w-100 object-fit-cover'
                            />
                            <div className='dropdown position-absolute top-0 end-0 me-16 mt-16'>
                                <button
                                    type='button'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                    className='bg-white-gradient-light w-32-px h-32-px radius-8 border border-light-white d-flex justify-content-center align-items-center text-white'
                                >
                                    <Icon icon='entypo:dots-three-vertical' className='icon ' />
                                </button>
                                <ul className='dropdown-menu p-12 border bg-base shadow'>
                                    <li>
                                        <Link
                                            className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10'
                                            to='#'
                                        >
                                            Edit
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            type='button'
                                            className='delete-btn dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-danger-100 text-hover-danger-600 d-flex align-items-center gap-10'
                                        >
                                            Delete
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className='ps-16 pb-16 pe-16 text-center mt--50'>
                                <img
                                    src='/assets/images/user-grid/store-logo.png'
                                    alt='WowDash React Vite'
                                    className='border br-white border-width-2-px w-100-px h-100-px rounded-circle object-fit-cover'
                                />
                                <h6 className='text-lg mb-0 mt-4'>Marvin McKinney</h6>
                                <span className='text-secondary-light mb-16'>
                  Address
                </span>
                                <div className='center-border position-relative bg-danger-gradient-light radius-8 p-12 d-flex align-items-center gap-4'>
                                    <div className='text-center w-50'>
                                        <h6 className='text-md mb-0'>Tax</h6>
                                        <span className='text-secondary-light text-sm mb-0'>
                      11 %
                    </span>
                                    </div>
                                    <div className='text-center w-50'>
                                        <h6 className='text-md mb-0'>Service Charge</h6>
                                        <span className='text-secondary-light text-sm mb-0'>
                      10 %
                    </span>
                                    </div>
                                </div>
                                <Link
                                    to='/'
                                    className='bg-primary-50 text-primary-600 bg-hover-primary-600 hover-text-white p-10 text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center justify-content-center mt-16 fw-medium gap-2 w-100'
                                >
                                    Select Store
                                    <Icon
                                        icon='solar:alt-arrow-right-linear'
                                        className='icon text-xl line-height-1'
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-3 col-md-6 user-grid-card   '>
                        <div className='position-relative border radius-16 overflow-hidden'>
                            <img
                                src='/assets/images/user-grid/meow-grid-bg1.png'
                                alt='WowDash React Vite'
                                className='w-100 object-fit-cover'
                            />
                            <div className='dropdown position-absolute top-0 end-0 me-16 mt-16'>
                                <button
                                    type='button'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                    className='bg-white-gradient-light w-32-px h-32-px radius-8 border border-light-white d-flex justify-content-center align-items-center text-white'
                                >
                                    <Icon icon='entypo:dots-three-vertical' className='icon ' />
                                </button>
                                <ul className='dropdown-menu p-12 border bg-base shadow'>
                                    <li>
                                        <Link
                                            className='dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-10'
                                            to='#'
                                        >
                                            Edit
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            type='button'
                                            className='delete-btn dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-danger-100 text-hover-danger-600 d-flex align-items-center gap-10'
                                        >
                                            Delete
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className='ps-16 pb-16 pe-16 text-center mt--50'>
                                <img
                                    src='/assets/images/user-grid/store-logo.png'
                                    alt='WowDash React Vite'
                                    className='border br-white border-width-2-px w-100-px h-100-px rounded-circle object-fit-cover'
                                />
                                <h6 className='text-lg mb-0 mt-4'>Guy Hawkins</h6>
                                <span className='text-secondary-light mb-16'>
                  Address
                </span>
                                <div className='center-border position-relative bg-danger-gradient-light radius-8 p-12 d-flex align-items-center gap-4'>
                                    <div className='text-center w-50'>
                                        <h6 className='text-md mb-0'>Tax</h6>
                                        <span className='text-secondary-light text-sm mb-0'>
                      11 %
                    </span>
                                    </div>
                                    <div className='text-center w-50'>
                                        <h6 className='text-md mb-0'>Service ChargeService Charge</h6>
                                        <span className='text-secondary-light text-sm mb-0'>
                      10 %
                    </span>
                                    </div>
                                </div>
                                <Link
                                    to='/'
                                    className='bg-primary-50 text-primary-600 bg-hover-primary-600 hover-text-white p-10 text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center justify-content-center mt-16 fw-medium gap-2 w-100'
                                >
                                    Select Store
                                    <Icon
                                        icon='solar:alt-arrow-right-linear'
                                        className='icon text-xl line-height-1'
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-between flex-wrap gap-2 mt-24'>
                    <span>Showing 1 to 10 of 12 entries</span>
                    <ul className='pagination d-flex flex-wrap align-items-center gap-2 justify-content-center'>
                        <li className='page-item'>
                            <Link
                                className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px  text-md'
                                to='#'
                            >
                                <Icon icon='ep:d-arrow-left' className='' />
                            </Link>
                        </li>
                        <li className='page-item'>
                            <Link
                                className='page-link text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md bg-primary-600 text-white'
                                to='#'
                            >
                                1
                            </Link>
                        </li>
                        <li className='page-item'>
                            <Link
                                className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px'
                                to='#'
                            >
                                2
                            </Link>
                        </li>
                        <li className='page-item'>
                            <Link
                                className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md'
                                to='#'
                            >
                                3
                            </Link>
                        </li>
                        <li className='page-item'>
                            <Link
                                className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md'
                                to='#'
                            >
                                4
                            </Link>
                        </li>
                        <li className='page-item'>
                            <Link
                                className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px w-32-px text-md'
                                to='#'
                            >
                                5
                            </Link>
                        </li>
                        <li className='page-item'>
                            <Link
                                className='page-link bg-neutral-200 text-secondary-light fw-semibold radius-8 border-0 d-flex align-items-center justify-content-center h-32-px text-md'
                                to='#'
                            >
                                {" "}
                                <Icon icon='ep:d-arrow-right' className='' />{" "}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default StorePOSLayer;
