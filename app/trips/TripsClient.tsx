'use client';

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation"
import axios from "axios";
import toast from "react-hot-toast";

import { SafeReservation, SafeUser } from "@/app/types";

import Container from "@/app/components/Container";
import Heading from "@/app/components/Heading";
import ListingCard from "@/app/components/listings/ListingCard";

interface TripsClientProps {
    reservations: SafeReservation[];
    currentUser?: SafeUser | null;
}
const TripsClient = ({
    reservations,
    currentUser
}: TripsClientProps) => {
    const router = useRouter();
    const [deletingId, setDelitingId] = useState('');

    const onCancel = useCallback((id: string) => {
        setDelitingId(id);

        axios.delete(`/api/reservations/${id}`)
            .then(() => {
                toast.success('Reservation canceled');
                router.refresh()
            })
            .catch((error) => {
                toast.error(error?.response?.data?.error)
            })
            .finally(() => {
                setDelitingId('')
            })
    }, [router])

    return (
        <Container>
            <Heading
                title="Trips"
                subTitle="Where you've been and where you're going"
            />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                {reservations.map((reservation) => (
                    <ListingCard
                        key={reservation.id}
                        data={reservation.listing}
                        reservation={reservation}
                        actionId={reservation.id}
                        onAction={onCancel}
                        disabled={deletingId === reservation.id}
                        actionLabel="Cancel reservation"
                        currentUser={currentUser}
                    />
                ))}
            </div>
        </Container>
    )
}

export default TripsClient;