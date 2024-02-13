class MyCalendarThree {
    constructor() {
        this.timeline = new Map(); // 일정을 저장할 Map 객체
    }

    book(start, end) {
        // 시작 시간과 끝 시간을 Map에 추가하거나 갱신한다.
        this.timeline.set(start, (this.timeline.get(start) || 0) + 1);
        this.timeline.set(end, (this.timeline.get(end) || 0) - 1);

        let maxBooking = 0; // 최대 k-booking을 저장할 변수
        let booking = 0; // 현재 k-booking을 저장할 변수

        // Map을 시작 시간을 기준으로 정렬하여 순회한다.
        for (const [time, delta] of [...this.timeline.entries()].sort((a, b) => a[0] - b[0])) {
            booking += delta; // 현재 k-booking을 업데이트한다.
            maxBooking = Math.max(maxBooking, booking); // 최대 k-booking을 업데이트한다.
        }

        return maxBooking; // 최대 k-booking을 반환한다.
    }
}