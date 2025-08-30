import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Wiadomość wysłana:", form);
    alert("Dziękujemy za kontakt! 💌");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 ">
      {/* Formularz kontaktowy */}
      <div>
        <h1 className="text-3xl font-bold mb-6 dark:text-white">
          📬 Skontaktuj się z nami
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4  dark:text-white">
          <div>
            <label className="block mb-1 font-medium">Imię</label>
            <Input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Twoje imię"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <Input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Twój email"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium ">Wiadomość</label>
            <Textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Twoja wiadomość..."
              required
              className="min-h-[40vh]"
            />
          </div>
          <Button type="submit" className="w-full">
            Wyślij
          </Button>
        </form>
      </div>
    </div>
  );
}
