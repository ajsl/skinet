using Core.Entities.OrderAggregate;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data.Config
{
    public class DeliverMethodConfiguration : IEntityTypeConfiguration<DeliveryMethod>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<DeliveryMethod> builder)
        {
            builder.Property(d => d.Price)
                .HasColumnType("decimal(18,2)");
        }
    }
}