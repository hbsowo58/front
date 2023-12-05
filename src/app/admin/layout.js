import Navigation from './Navigation';
import Menu from './Menu';
import test from './styles/navigations.module.css'



export default function Layout({children}) {
    return (
            <div className="flex h-screen sticky">

                <div className="w-1/5 border-r bg-gray fixed h-screen">
                        <Navigation/>
                </div>

                <div className="w-1/5">
                        fixed로 인한 임시공간
                </div>


                <div className="w-3/4">
                    <div>
                        <Menu />
                        <p className='mb-4'>세메스</p>
                        <div>
                            {children}
                        </div>
                    </div>
                </div>

            </div>
    )
}