import paypartner1 from '../../assets/paypartner1.png';
import paypartner2 from '../../assets/paypartner2.png';
import paypartner3 from '../../assets/paypartner3.png';
import paypartner4 from '../../assets/paypartner4.png';

import org1 from '../../assets/org1.png';
import org2 from '../../assets/org2.png';
import org3 from '../../assets/org3.png';
import org4 from '../../assets/org4.png';

export default function PartnerSection() {

    const paypartners = [
        {
            alt: 'paypartner1',
            imgSrc: paypartner1
        },
        {
            alt: 'paypartner2',
            imgSrc: paypartner2
        },
        {
            alt: 'paypartner3',
            imgSrc: paypartner3
        },
        {
            alt: 'paypartner4',
            imgSrc: paypartner4
        },
    ]

    const associatedOrgs = [
        {
            alt: 'org1',
            imgSrc: org1
        },
        {
            alt: 'org2',
            imgSrc: org2
        },
        {
            alt: 'org3',
            imgSrc: org3
        },
        {
            alt: 'org4',
            imgSrc: org4
        },
    ]

    return (
        <section className="bg-primary py-16">
            <div className="container mx-auto px-5 md:px-24 flex gap-4 lg:flex-row flex-col">
                <div className='lg:w-1/2'>
                <h2 className="text-4xl text-center tracking-tight font-bold text-gray-500 pb-8">Payment Partners</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full">
                        {/* Payment Partners */}
                        {paypartners.map((paypartner, index) => (
                        <div className="flex justify-center items-center" key={index}>
                            <img
                                src={paypartner.imgSrc}
                                alt={paypartner.alt}
                                className="h-12 object-contain hover:scale-105 transition duration-300"
                            />
                        </div>
                        ))}
                    </div>
                </div>
                <div className='w-[0.5px] bg-darkorange hidden lg:block'>

                </div>
                <hr className='lg:hidden border-darkorange' />

                <div className='lg:w-1/2'>
                <h2 className="text-4xl text-center tracking-tight font-bold text-gray-500 pb-8">Associated Organizations</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full">
                        {/* Associated Organizations */}
                        {associatedOrgs.map((associatedOrg, index) => (
                        <div className="flex justify-center items-center" key={index}>
                            <img
                                src={associatedOrg.imgSrc}
                                alt={associatedOrg.alt}
                                className="h-12 object-contain hover:scale-105 transition duration-300"
                            />
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
