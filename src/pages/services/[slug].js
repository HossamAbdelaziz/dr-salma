import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import { useRouter } from 'next/router';
import MeetDrSalma from '@/components/MeetSection';
import '@/app/globals.css';


export default function ServicePage({ data }) {
    const router = useRouter();
    if (router.isFallback) return <div>Loading...</div>;
    if (!data) return <div>404 - Not Found</div>;

    return (
        <div className="bg-[#e8e7e7] text-[#405a33] font-sans">
            {/* Header Section */}
            <section className="bg-[#ed7875] text-white py-10 text-center">
                <h1 className="text-4xl font-bold">{data.title}</h1>
                <p className="mt-2 text-lg">{data.subtitle}</p>
            </section>

            {/* Top Visual Section */}
            <section className="flex flex-col items-center justify-center p-6">
                <p className="font-semibold">{data.centerTagline}</p>
                <div className="my-4 text-center">
                    <p className="bg-[#405a33] text-white px-4 py-2 rounded mb-2">{data.badge}</p>
                    <p className="text-lg italic">{data.rightQuote}</p>
                </div>
                <Image
                    src={data.centerImage}
                    alt="Center"
                    width={250}
                    height={250}
                    className="rounded"
                />
            </section>

            {/* What Are Hormonal Imbalances */}
            <section className="px-4 md:px-20 py-10">
                <h2 className="text-2xl font-bold mb-2">{data.infoTitle}</h2>
                <p className="text-gray-700">{data.infoDescription}</p>

                <h3 className="text-xl font-bold mt-6 mb-2">{data.signsTitle}</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    {data.signsList.map((item, idx) => (
                        <li key={idx}>✔️ {item}</li>
                    ))}
                </ul>
            </section>

            {/* Highlight Section */}
            <section className="bg-white px-4 md:px-20 py-10">
                <h3 className="text-xl font-bold mb-2">{data.highlightTitle}</h3>
                <p className="text-gray-800">{data.highlightStats}</p>
                <p className="font-semibold mt-1">{data.highlightDiagnosisTime}</p>
                <div className="my-4">
                    <Image
                        src={data.highlightImage}
                        alt="Highlight"
                        width={600}
                        height={300}
                        className="rounded"
                    />
                </div>
            </section>

            {/* Mini Cards Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-20 py-10">
                {data.solutionCards.map((card, idx) => (
                    <div key={idx} className="bg-[#f7f7f7] p-4 rounded shadow">
                        <h4 className="text-lg font-bold mb-2">{card.title}</h4>
                        <p>{card.description}</p>
                        <ul className="list-disc ml-5 text-sm mt-2 text-gray-700">
                            {card.points.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                        <p className="mt-2 text-sm text-green-700 font-medium">{card.cta}</p>
                    </div>
                ))}
            </section>

            {/* Meet Dr Salma */}
            <section className="bg-[#fff5f5] px-4 md:px-20 py-10">
                <MeetDrSalma />
            </section>

            {/* Why Choose Section */}
            <section className="px-4 md:px-20 py-10">
                <h2 className="text-2xl font-bold mb-4">Why Women Choose Dr. Salma:</h2>
                <ul className="list-disc ml-6 space-y-2 text-gray-800">
                    {data.whyList.map((point, idx) => (
                        <li key={idx}>❤️ {point}</li>
                    ))}
                </ul>
                <div className="mt-4 bg-white border rounded p-4">
                    <ul className="list-disc ml-6 text-sm font-medium text-[#405a33]">
                        {data.certifications.map((c, i) => (
                            <li key={i}>✔️ {c}</li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* CTA Buttons */}
            <section className="text-center py-10">
                <button className="bg-[#ed7875] hover:bg-[#405a33] text-white font-semibold px-6 py-3 rounded mr-4">
                    Book Your Consultation
                </button>
                <button className="bg-[#405a33] hover:bg-[#ed7875] text-white font-semibold px-6 py-3 rounded">
                    Learn More About My Approach
                </button>
            </section>
        </div>
    );
}

export async function getStaticPaths() {
    const servicesPath = path.join(process.cwd(), 'src/data/services');
    const files = fs.readdirSync(servicesPath);
    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.json', ''),
        },
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    try {
        const filePath = path.join(process.cwd(), 'src/data/services', `${params.slug}.json`);
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        const data = JSON.parse(jsonData);
        return { props: { data } };
    } catch {
        return { notFound: true };
    }
}
