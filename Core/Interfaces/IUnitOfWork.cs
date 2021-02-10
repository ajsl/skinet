using System;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
         IGenericRepository<TEntity> Repository<TEntity>() where TEntity : BaseEntity;
         Task<int> Compleat(); //will return number of changes to the db

         
    }
}