import React, { useState } from "react";
import BookingList from "../../components/BookingList/BookingList";

import styles from "./BookingsPage.module.scss";

const BookingsPage: React.FC = () => {
  const [bookings, setBookings] = useState([
    { title: "Iceland", guests: 2, date: "2024-07-13", total: 14000 },
    { title: "Iceland", guests: 2, date: "2024-09-30", total: 14000 },
    { title: "Iceland", guests: 2, date: "2024-10-11", total: 14000 },
  ]);

  const sortedBookings = bookings.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const handleCancel = (index: number) => {
    setBookings(sortedBookings.filter((_, i) => i !== index));
  };

  return (
    <section className={styles.bookings}>
      <BookingList bookings={sortedBookings} handleCancel={handleCancel} />
    </section>
  );
};

export default BookingsPage;
