import { RARITY_COLOR } from "@/constants/items"; // wherever you saved it

import type { ItemCardProps } from "@/types/cards";

export function ItemCard({
  name,
  imageUrl,
  rarity = "unique",
  implicit = [],
  explicit = [],
  mutated = [],
  flavorText,
}: ItemCardProps) {
  // Use the RARITY_COLOR constant
  const theme = RARITY_COLOR[rarity.toUpperCase() as keyof typeof RARITY_COLOR];

  const Separator = ({ color }: { color: string }) => (
    <div className="my-2 flex justify-center">
      <div
        style={{
          backgroundImage: `linear-gradient(to right, transparent, ${color}, transparent)`,
        }}
        className="h-[2px] w-[55%] opacity-60"
      />
    </div>
  );

  return (
    <article
      style={{
        border: `2px solid ${theme.border}`,
        boxShadow: theme.glow,
        background: theme.bodyBg,
      }}
      className="w-[max(40ch,23vw)] max-w-full min-w-full rounded-sm text-center"
    >
      {/* Header */}
      <header
        style={{
          background: theme.headerBg,
          borderBottom: `1px solid ${theme.border}`,
        }}
        className="p-2"
      >
        <h1 style={{ color: theme.title }} className="text-lg tracking-wide">
          {name}
        </h1>
      </header>

      {/* Body */}
      <div>
        {implicit.length > 0 && (
          <>
            <section className="m-2">
              {implicit.map((line, i) => (
                <div key={i} className="leading-snug whitespace-pre-line text-[#7f9cff]">
                  {line}
                </div>
              ))}
            </section>

            {(explicit.length > 0 || mutated.length > 0 || flavorText) && (
              <Separator color={theme.border} />
            )}
          </>
        )}

        {explicit.length > 0 && (
          <section id="explicit">
            {explicit.map((line, i) => (
              <div key={i} className="whitespace-pre-line text-[#7f9cff]">
                {line}
              </div>
            ))}
          </section>
        )}

        {/* Mutated */}
        {mutated.length > 0 && (
          <>
            <section>
              {mutated.map((line, i) => (
                <div key={i} className="leading-snug whitespace-pre-line text-[#a66bff]">
                  {line}
                </div>
              ))}
            </section>

            {flavorText && <Separator color={theme.border} />}
          </>
        )}

        {flavorText && (
          <section className="whitespace-pre-line" style={{ color: theme.title }}>
            {flavorText}
          </section>
        )}

        {imageUrl && (
          <section>
            <img src={imageUrl} alt={name} className="mx-auto my-0" />
          </section>
        )}
      </div>
    </article>
  );
}
